import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import { UserProfile } from '../models/userProfile';
import jwt from 'jsonwebtoken';

export const newUser = async (req: Request, res: Response) => {

    const { username, password, name, surname, email } = req.body;

    // Validamos si el usuario ya existe en la base de datos
    const user = await User.findOne({ where: { username: username } });

    if(user) {
       return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        })
    } 
 
    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
        // Guardarmos usuario en la base de datos
        const newUser = await User.create({
            username: username,
            password: hashedPassword,
            name: name,
            surname: surname,
            email: email
        });
        
        await UserProfile.create({
            userId: newUser.id,
            profileId: 2 // Asumiendo que el ID 2 corresponde a ROL_CLIENTE
        });

        res.json({
            msg: `Usuario ${username} creado exitosamente!`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        })
    }
}

export const loginUser = async (req: Request, res: Response) => {

    const { username, password } = req.body;

   // Validamos si el usuario existe en la base de datos
   const user: any = await User.findOne({ where: { username: username } });

   if(!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${username} en la base datos`
        })
   }

   // Validamos password
   const passwordValid = await bcrypt.compare(password, user.password)
   if(!passwordValid) {
    return res.status(400).json({
        msg: `Password Incorrecta`
    })
   }

   // Obtenemos el profileId
   const userProfile = await UserProfile.findOne({ where: { userId: user.id } });
   if (!userProfile) {
       return res.status(400).json({
           msg: 'No se pudo encontrar el perfil del usuario'
       });
   }

   // Generamos token
   const token = jwt.sign({
    username: username
   }, process.env.SECRET_KEY || 'pepito123');
   
   res.json({
    token,
    profileId: userProfile.profileId
});
}

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const listUser = await User.findAll();
      res.json(listUser);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };


//2024-05-20 12:15:30