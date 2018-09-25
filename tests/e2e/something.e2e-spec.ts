import { AppModule } from '../../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import {SomethingGateway} from "../../src/something/something.gateway";

describe('SomethingController (e2e)', () => {
	let app: INestApplication;

	beforeAll(async () => {
		const moduleFixture = await Test.createTestingModule({
			imports: [AppModule],
		})
			// @TODO uncomment these lines to make tests green
			// .overrideProvider(SomethingGateway)
			// .useValue('fake provider because gateway break our tests')
			.compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	describe(`GET`, () => {
		it(`fake test`, async done => {
			done();
		});
	});
});
