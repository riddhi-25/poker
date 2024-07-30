import { Meta } from '@storybook/angular';
import { IssueCardComponent } from './issue-card.component';

export default {
  title: 'IssueCardComponent',
  component: IssueCardComponent,
  tags: ['autodocs']
} as Meta<IssueCardComponent>;

export const Primary = {
  render: (args: IssueCardComponent) => ({
    props: args
  }),
  args: {
    issue: {
      id: 1,
      title: 'KIC-999',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      status: 'voting',
      vote: 1,
    },
  }
};