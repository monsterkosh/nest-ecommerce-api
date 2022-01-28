import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from './shared/shared.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), SharedModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
