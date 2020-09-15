import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

class AppointmenstController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { providerId, date } = req.body;
    const parsedDate = parseISO(date);
    const createAppointment = container.resolve(CreateAppointmentService);
    const appointment = await createAppointment.execute({
      date: parsedDate,
      providerId,
    });

    return res.json(appointment);
  }
}

export default AppointmenstController;
