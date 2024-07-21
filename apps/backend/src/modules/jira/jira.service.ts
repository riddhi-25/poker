import { Injectable } from '@nestjs/common';
import { axisUtil } from '../../main';
import { JIRA_BASE_URL } from '../../constants/constants';

@Injectable()
export class JiraService {
  restApiBaseUrl = '/rest/agile/latest';

  async getQueryJIRA(apiUrl: string): Promise<any> {
    const response = await axisUtil.get(`${JIRA_BASE_URL}${this.restApiBaseUrl}${apiUrl}`);
    return response.data;
  }

  async postQueryJIRA(apiUrl: string, body: JSON): Promise<any> {
    const response = await axisUtil.post(`${JIRA_BASE_URL}${this.restApiBaseUrl}${apiUrl}`, body);
    return response.data;
  }

  async putQueryJIRA(apiUrl: string, body: JSON): Promise<any> {
    const response = await axisUtil.put(`${JIRA_BASE_URL}${this.restApiBaseUrl}${apiUrl}`, body);
    return response.data;
  }

  async patchQueryJIRA(apiUrl: string, body: JSON): Promise<any> {
    const response = await axisUtil.patch(`${JIRA_BASE_URL}${this.restApiBaseUrl}${apiUrl}`, body);
    return response.data;
  }

  async deleteQueryJIRA(apiUrl: string): Promise<any> {
    const response = await axisUtil.delete(`${JIRA_BASE_URL}${this.restApiBaseUrl}${apiUrl}`);
    return response.data;
  }
}
