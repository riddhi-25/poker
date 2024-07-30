import { Body, Controller, Post } from '@nestjs/common';
import { JiraService } from './jira.service';
import { JiraQuery } from './jira.model';

@Controller('jira')
export class JiraController {

  constructor(private jiraService: JiraService) {}

  @Post()
  queryJIRA(@Body() query: JiraQuery) {

    switch(query.method) {
      case 'Get':
        return this.jiraService.getQueryJIRA(query.apiUrl);
      case 'Post':
        return this.jiraService.postQueryJIRA(query.apiUrl, query.body);
      case 'Put':
      case 'Patch':
      case 'Delete':
      default:
        return this.jiraService.getQueryJIRA(query.apiUrl);
    }
  }
}
