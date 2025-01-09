import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/global-config';

import DataContent from './DataContent';
import ContentHeader from 'src/components/content-header';
import Header from './Header';

const metadata = { title: `Page four | Dashboard - ${CONFIG.appName}` };
const WorkPlace = () => {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ContentHeader title="位置管理" icon="LandPlot" />

      <Header />

      <DataContent />
    </>
  );
};
export default WorkPlace;
