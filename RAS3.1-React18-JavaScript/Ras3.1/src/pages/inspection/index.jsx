import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/global-config';

import DataContent from './DataContent';
import ContentHeader from 'src/components/content-header';
import Header from './Header';

const metadata = { title: `检品管理 | Dashboard - ${CONFIG.appName}` };

const Inspection = () => {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ContentHeader
        title="检品管理"
        icon="Pill"
        customStyle={{ size: 28, strokeWidth: 2, color: '#a855f7', fontColor: 'text-purple-500' }}
      />

      <Header />

      <DataContent />
    </>
  );
};

export default Inspection;
