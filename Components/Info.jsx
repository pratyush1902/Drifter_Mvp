import React from 'react';
import InfoHead from './InfoHead';
import InfoNear from './InfoNear';
import InfoWeather from './InfoWeather';
import InfoCompare from './InfoCompare';
import InfoReach from './InfoReach';
import InfoScam from './InfoScam';
import InfoList from './InfoList';
import Transport from './InfoLocalTransport';
import Credit from './InfoCredit';
import InfoActivity from './InfoActivity';
import InfoEatery from './InfoEatery';
import InfoShop from './InfoShpping';

export default function Info({ cityData, id }) {
  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8">
      <InfoHead data={cityData.Name} />
      <InfoWeather />
      <InfoCompare />
      <Transport />
      <InfoReach />
      <InfoList destinationId={id} />
      <InfoActivity destinationId={id} />
      <InfoEatery data={cityData} destinationId={id} />
      <InfoShop data={cityData} destinationId={id} />
      <InfoNear data={cityData} destinationId={id} />
      <InfoScam />
      <Credit />
    </div>
  );
}
