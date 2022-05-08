import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ChangeItemOrderDto } from './dto/change-item-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar uma ordem',
  })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todas as ordens',
  })
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar uma ordem pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Patch(':id/add-item')
  addItem(
    @Param('id') id: string,
    @Body() changeItemOrderDto: ChangeItemOrderDto,
  ) {
    return this.orderService.addItem(id, changeItemOrderDto);
  }

  @Patch(':id/remove-item')
  removeItem(
    @Param('id') id: string,
    @Body() changeItemOrderDto: ChangeItemOrderDto,
  ) {
    return this.orderService.removeItem(id, changeItemOrderDto);
  }

  @Patch('close-order/:id')
  @ApiOperation({
    summary: 'Fechar um pedido',
  })
  closeOrder(@Param('id') id: string) {
    return this.orderService.closeOrder(id);
  }
}
