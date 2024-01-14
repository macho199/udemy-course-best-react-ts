import React from 'react';
import { Page } from '../App';
import noProject from '../assets/no-projects.png';
import Main from './Main';

type DefaultPageProps = {
  onPageMove: (page: Page) => void;
};

const P = ({
  addClass = [],
  children,
}: {
  addClass?: string[];
  children: React.ReactNode;
}) => {
  return <p className={['mt-5', ...addClass].join(' ')}>{children}</p>;
};

const DefaultPage = ({ onPageMove }: DefaultPageProps) => {
  const handleNewClick = () => {
    onPageMove(Page.CreateProject);
  };

  return (
    <Main addClass={['text-center']}>
      <div className="mt-5">
        <img className="w-16 inline" src={noProject} />
      </div>
      <P addClass={['text-2xl', 'font-bold']}>No Project Selected</P>
      <P>Select a project or get started with a new one</P>
      <P>
        <button
          className="bg-slate-700 text-white px-4 py-2 rounded-md"
          onClick={handleNewClick}
        >
          Create new project
        </button>
      </P>
    </Main>
  );
};

export default DefaultPage;
