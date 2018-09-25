import { SomethingGateway } from './something.gateway';
import { Module } from '@nestjs/common';
import { SomethingController } from './something.controller';

@Module({
	controllers: [SomethingController],
	providers: [
		SomethingGateway,
	],
})
export class SomethingModule {}
