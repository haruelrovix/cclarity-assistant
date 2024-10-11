import PromptButton from '@/components/MainContentArea/PromptButton';
import { md } from '@/services/utils';
import { useStore } from '@/store/useStore';
import { FlatList } from 'react-native';

export type PromptButtonsProps = {
  promptButtons: any[]
}

export default function PromptButtons({ promptButtons }: PromptButtonsProps) {
  const dimensions = useStore((state) => state.dimensions);
  const numColumns = md(dimensions.window) ? 3 : 2;

  return (
    <>
      <FlatList
        data={promptButtons}
        renderItem={({ item }) => <PromptButton key={item.id} prompt={item} width={dimensions.window.width} />}
        numColumns={numColumns}
        extraData={dimensions.window}
        key={numColumns}
      />
    </>
  );
};

export const FIRST = [{
  id: '3d9f0e9b-b1d1-4e63-8c42-1b2f89f24952',
  icon: 'favorite',
  title: 'My personal story',
  content: "Let me share a personal journey that has shaped who I am today. It's a story about growth, challenges, and the valuable lessons learned along the way."
},
{
  id: '7a1c4f8d-8c34-40f7-b4f8-14ef1f3dc1a3',
  icon: 'compare-arrows',
  title: 'My contrarian view',
  content: "Most people believe X, but I see things differently. Here's why my perspective challenges the conventional wisdom on this topic."
}];

export const SECOND_A = {
  id: '960649ed-d165-48a0-8fbe-17ca11dcbd3b',
  icon: 'track-changes',
  title: 'My challenge and solution',
  content: "I faced a significant roadblock when trying to achieve my goals. Here's the strategy I used to overcome it, and how it led to success."
};

export const SECOND_B = {
  id: 'b6f2c7d6-13d7-4bbb-b69e-5c4c55c9c0b8',
  icon: 'track-changes',
  title: 'Challenge / solution',
  content: "I faced a significant roadblock when trying to achieve my goals. Here's the strategy I used to overcome it, and how it led to success."
};

export const THIRD = [{
  id: 'e5e430e8-eda2-4e08-9b0c-6fc4d38d2a5a',
  icon: 'lightbulb-outline',
  title: 'A valuable insight',
  content: "Through careful observation and analysis, I've gained an important insight that I believe can make a big difference. Here's what I discovered and why it matters."
},
{
  id: 'f38a1d83-6bb7-4be5-90bd-b25f6cb9ad4e',
  icon: 'check-box',
  title: 'What I did and learnt',
  content: "This project pushed me to expand my skills. Here's what I accomplished, and the key lessons I learned in the process."
},
{
  id: '1c9cf845-4323-4da7-9d73-143726440c8a',
  icon: 'campaign',
  title: 'Promote an offer',
  content: "I'm excited to share this exclusive offer with you! It's a limited-time opportunity that provides incredible value and benefits."
}];
