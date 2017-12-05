import tooltipFactory from './Tooltip';
import TooltipLabel from './TooltipLabel';

const tooltipFactoryWithOptions = options => tooltipFactory(options);

export default tooltipFactory();
export { tooltipFactory as Tooltip, TooltipLabel, tooltipFactoryWithOptions as tooltipFactory };
