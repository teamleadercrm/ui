import { GroupBase } from 'react-select';
import { Option } from '../../components/select';
import userAvatar1 from '../avatars/1.png';
import userAvatar2 from '../avatars/2.png';
import userAvatar3 from '../avatars/3.png';
import userAvatar4 from '../avatars/4.png';

const options: Option[] = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Vanilla', value: 'vanilla' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Caramel', value: 'caramel', isDisabled: true },
  { label: 'Cookies and Cream', value: 'cookiescream' },
  { label: 'Peppermint', value: 'peppermint' },
];

const customOptions: Option[] = [
  { label: 'Jane Smith', value: 'jane_smith', avatar: userAvatar1 },
  { label: 'Jenny', value: 'jenny', avatar: userAvatar4, isDisabled: true },
  { label: 'John Doe', value: 'john_doe', avatar: userAvatar2 },
  { label: 'Molly', value: 'molly', avatar: userAvatar3 },
];

const groupedOptions: GroupBase<Option>[] = [
  {
    label: 'Flavors',
    options: [
      { label: 'Chocolate', value: 'chocolate' },
      { label: 'Vanilla', value: 'vanilla', isDisabled: true },
      { label: 'Strawberry', value: 'strawberry' },
    ],
  },
  {
    label: 'Colors',
    options: [
      { label: 'Red', value: 'red' },
      { label: 'Green', value: 'green' },
      { label: 'Blue', value: 'blue' },
    ],
  },
];

const groupedOptionsWithoutLabels: GroupBase<Option>[] = [
  {
    options: [
      { label: 'Chocolate', value: 'chocolate' },
      { label: 'Vanilla', value: 'vanilla', isDisabled: true },
      { label: 'Strawberry', value: 'strawberry' },
    ],
  },
  {
    options: [
      { label: 'Red', value: 'red' },
      { label: 'Green', value: 'green' },
      { label: 'Blue', value: 'blue' },
    ],
  },
];

export default options;
export { customOptions, groupedOptions, groupedOptionsWithoutLabels, options };
