import { Fragment } from 'react';

import { Portal } from '@mantine/core';

import { ProgressBar } from 'src/components/animate';

// ----------------------------------------------------------------------

export function SplashScreen({ portal = true, slotProps, sx, ...other }) {
  const PortalWrapper = portal ? Portal : Fragment;

  return (
    <PortalWrapper>
      <div className=" flex-grow flex flex-col" {...slotProps?.wrapper}>
        <div
          className=" flex-grow z-[9998] right-0 bottom-0 w-full h-full flex fixed  items-center justify-center bg-transparent"
          sx={sx}
          {...other}
        >
          <ProgressBar />
        </div>
      </div>
    </PortalWrapper>
  );
}
