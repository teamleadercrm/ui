import tooltipFactory from './Tooltip';

const tooltipFactoryWithOptions = options => tooltipFactory(options);

export default tooltipFactory();
export { tooltipFactory as Tooltip, tooltipFactoryWithOptions as tooltipFactory };
