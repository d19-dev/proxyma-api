import { NestFactory } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import config from './config/swagger'

async function bootstrap() {
  const port = parseInt(process.env.PORT) || 3000
  const app = await NestFactory.create(AppModule)
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  await app.listen(port)
}
bootstrap()
