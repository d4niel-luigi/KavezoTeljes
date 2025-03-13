import { Injectable } from '@nestjs/common';
import { CreateKoncertekDto } from './dto/create-koncertek.dto';
import { UpdateKoncertekDto } from './dto/update-koncertek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class KoncertekService {
  constructor(private prisma: PrismaService){}
  create(createKoncertekDto: CreateKoncertekDto) {
    const currentDate = new Date()
    if(new Date(createKoncertekDto.started_at) < currentDate){
      throw new Error('The concert date cannot be in the past')
    }
      return this.prisma.koncert.create({
        data:createKoncertekDto
      })
  }

  findAll() {
    return this.prisma.koncert.findMany();
  }

  findOne(id: number) {
    return this.prisma.koncert.findUnique({
      where: {id}
    })
  }

  update(id: number, updateKoncertekDto: UpdateKoncertekDto) {
    return this.prisma.koncert.update({
      where:{id},
      data: updateKoncertekDto,
    })
  }

  remove(id: number) {
    return this.prisma.koncert.delete({
      where: {
        id
      }
    })
  }
}
