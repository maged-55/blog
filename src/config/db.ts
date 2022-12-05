import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient({
    log: ['info', 'query', 'warn','error'],
    errorFormat: 'pretty'
})

const connectDB = ()=>{
    try {
        prisma.$connect();
        console.log("database connection established");
        
        
    } catch (error) {
        console.log(error);
        process.exit(1);


        
    }
}

export { prisma, connectDB };