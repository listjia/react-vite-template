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

      <ContentHeader title="检品管理" icon="LandPlot" />

      <Header />

      <DataContent />
    </>
  );
};

export default Inspection;
