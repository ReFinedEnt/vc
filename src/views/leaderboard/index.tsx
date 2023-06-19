import { useEffect, useState } from 'react';

import Spinner from '../../components/spinner/spinner.component';

import type { FC } from 'react';

import yoursolanabro from '../../assets/img/yoursolanabro.png';
import Table from 'components/table/table.component';

const LeaderBoardView: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1337);
  }, []);

  return (
    <div className="max-w-[100vw] mx-auto min-h-screen flex justify-center items-center mt-[67.5px]">
      <div className="flex flex-col">
        {loading ? (
          <Spinner />
        ) : (
          <div className="hero flex flex-col justify-center items-center">
            <Table />
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderBoardView;
