import { Helmet } from 'react-helmet-async';
import ContentHeader from 'src/components/content-header';
import { CONFIG } from 'src/global-config';

import DataContent from './DataContent';

import Header from './Header';

const metadata = { title: `位置管理 | 首页 - ${CONFIG.appName}` };
const WorkPlace = () => {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ContentHeader
        title="位置管理"
        icon="LandPlot"
        customStyle={{ size: 28, strokeWidth: 2, color: '#3b82f6', fontColor: 'text-blue-500' }}
      />

      <Header />

      <DataContent />
    </>
  );
};
export default WorkPlace;
