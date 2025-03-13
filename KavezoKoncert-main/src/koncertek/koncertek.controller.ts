import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KoncertekService } from './koncertek.service';
import { CreateKoncertekDto } from './dto/create-koncertek.dto';
import { UpdateKoncertekDto } from './dto/update-koncertek.dto';

@Controller('koncertek')
export class KoncertekController {
  constructor(private readonly koncertekService: KoncertekService) {}

  @Post()
  create(@Body() createKoncertekDto: CreateKoncertekDto) {
    return this.koncertekService.create(createKoncertekDto);
  }

  @Get()
  findAll() {
    return this.koncertekService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.koncertekService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKoncertekDto: UpdateKoncertekDto) {
    return this.koncertekService.update(+id, updateKoncertekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.koncertekService.remove(+id);
  }
}
