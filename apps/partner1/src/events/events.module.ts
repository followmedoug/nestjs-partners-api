import { Global, Module } from '@nestjs/common';
import { EventsCoreModule } from '@app/core/events/events-core.module';
import { EventsController } from './events.controller';

@Global()
@Module({
  imports: [EventsCoreModule],
  controllers: [EventsController],
})
export class EventsModule {}
