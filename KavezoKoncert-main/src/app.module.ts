import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KoncertekModule } from './koncertek/koncertek.module';

@Module({
  imports: [KoncertekModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
