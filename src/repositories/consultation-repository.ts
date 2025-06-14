import { Prisma, Consultation } from '@prisma/client'

export interface ConsultationRepository {
  findById(id: string): Promise<Consultation | null>
  findMany(): Promise<Consultation[]>
  create(data: Prisma.ConsultationCreateInput): Promise<Consultation>
  update(
    id: string,
    data: Prisma.ConsultationUpdateInput,
  ): Promise<Consultation>
  delete(id: string): Promise<void>
  findByProfessionalAndDateTime(
    professionalId: string,
    dateTime: Date,
  ): Promise<Consultation[]>
  findByProfessionalId(professionalId: string): Promise<Consultation[]>
  findByClientId(clientId: string): Promise<Consultation[]>
}
