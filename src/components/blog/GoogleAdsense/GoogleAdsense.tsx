import { Box } from '@chakra-ui/react';
import React from 'react';
const GoogleAdsense = () => {
  React.useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <Box minH="250px" minW="250px">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-layout-key="-5m+dd+6a-et-7s"
        data-ad-client="ca-pub-5784502386040084"
        data-ad-slot="8496837469"
        data-ad-format="fluid"
      />
    </Box>
  );
};
export default GoogleAdsense;
