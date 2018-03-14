import addHeaderToDom from './helpers';

import theFunctionThatLogs, {add, subtraction, multiplication, division, squared, cubed} from './math';

theFunctionThatLogs();

addHeaderToDom('100 + 54 =' + add(100,54));

addHeaderToDom('100 - 54 = ' + subtraction(100,54));

addHeaderToDom('100 * 54 = ' + multiplication(100, 54));

addHeaderToDom('100 / 54 = ' + division(100,54));

addHeaderToDom('100^2 = ' + squared(100));

addHeaderToDom('100 ^ 3 = ' + cubed(100));

addHeaderToDom(`100 + 0 = ${division(100,0)}`);

