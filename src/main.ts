import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './modules/app.module';
import { SwaggerConfig } from './config/swagger/swagger.config';
import { envs } from './config/envs/environment-config';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  SwaggerConfig.setup(app)
  await app.listen(envs.PORT);
  logger.log(`App running in port ${envs.PORT}`);
}
bootstrap();
