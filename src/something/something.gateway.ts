import {
	WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway({ namespace: 'something' })
export class SomethingGateway {
}
