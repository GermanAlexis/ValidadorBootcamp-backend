import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { envs } from 'src/config/envs/environment-config';
import { AssessmentEntity } from 'src/models/assessment/assessment.entity';

@Injectable()
export class AssessmentsClient {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  async getAssessmentByBootcampId(
    bootcampId: string,
  ): Promise<AssessmentEntity[]> {
    try {
      const response = await this.httpService
        .get(
          `${envs.ASSESSMENT_SERVICE_URL}/bootcamp/${bootcampId}`,
        )
        .toPromise();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
