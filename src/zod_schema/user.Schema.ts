import {z, TypeOf} from 'zod';



export const logInSchema = z.object({
    body: z.object({
    

        username: z
        .string({ required_error: 'username is required !' }),
        password: z
        .string({ required_error: 'Password is required !' }),
    }),
  });
  export type logInSchemaType = TypeOf<typeof logInSchema>['body'];

  export const regSchema = z.object({
    body: z.object({
    
   
        username: z
        .string({ required_error: 'username is required !' })
        .min(3, 'username must be greater than 2')
        .max(15, 'username must be smaller than 15'),

        password:z
        .string({required_error: 'Password is required !'}),
        email: z
        .string().email({ message: "Invalid email address" }),
        
       
    }),
  });
  export type regSchemaType = TypeOf<typeof regSchema>['body'];


 