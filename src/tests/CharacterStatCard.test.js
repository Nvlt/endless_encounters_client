import React from 'react';
import ReactDom from 'react-dom';
import CharStatCard from '../components/DashBoardComponents/CharacterStatCard/CharacterStatCard';

it('renders CardStatCard without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<CharStatCard />, div);

  ReactDom.unmountComponentAtNode(div);
});