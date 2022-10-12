import type { NextPage } from 'next';
import Head from 'next/head';
import { BasicsView } from '../views';
import Portfolio from 'components/Portfolio';

const Basics: NextPage = (props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Portfolio />
    </div>
  );
};

export default Basics;
