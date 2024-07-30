import { Meta } from '@storybook/angular';
import { FeedbackCardComponent } from './feedback-card.component';

export default {
  title: 'FeedbackCardComponent',
  component: FeedbackCardComponent,
} as Meta<FeedbackCardComponent>;

export const Primary = {
  render: (args: FeedbackCardComponent) => ({
    props: args,
  }),
  args: {
    title: '',
    colorTaker: '',
    likeCard : 0,
    dislikeCard : 0,
    

  },

};
