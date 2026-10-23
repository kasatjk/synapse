import RegionMapOverview from '../components/RegionMapOverview.jsx';
import map from '../assets/Europe/map.png';

const legendItems = [
  { label: 'Держави-карлики', color: '#ffc90e' },
  { label: 'Ісландія — найнижча густота населення', color: '#b5e61d' },
  { label: 'Монако — найвища густота населення', color: '#22b14c' },
];

const statistics = [
  { label: 'Населення', value: '743 млн' },
  { label: 'Густота населення', value: '72 осіб/км²' },
  { label: 'Найвища густота', value: 'Монако' },
  { label: 'Найнижча густота', value: 'Ісландія' },
];

const summaryText =
  'Європа — високоурбанізований та диференційований регіон із виразними географічними й демографічними контрастами. Спостерігається суттєвий градієнт щільності: від найнижчих показників у субарктичній Ісландії до надвисокої концентрації у карликових містах-державах на зразок Монако.';

export default function Europe() {
  return (
    <RegionMapOverview
      title="Практична робота"
      subtitle="Населення Європи на карті"
      mapSrc={map}
      mapAlt="Картографічна схема щільності населення Європи"
      mapCaption="Карта щільності населення Європи"
      legendItems={legendItems}
      statistics={statistics}
      summaryText={summaryText}
    />
  );
}
