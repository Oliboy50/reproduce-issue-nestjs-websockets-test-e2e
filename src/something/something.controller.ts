import {
	Controller,
	Get,
	Req,
} from '@nestjs/common';

@Controller()
export class SomethingController {
	@Get('/')
	list(@Req() request) {
		return 'test';
	}
}
