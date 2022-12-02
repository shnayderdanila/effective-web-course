import { characters } from './Characters';
import { comics } from './Comics';
import { series } from './Series';

// spider man
characters[0].comics?.push(comics[0]);
characters[0].series?.push(series[0]);

characters[0].characters?.push(characters[0]);
characters[0].series?.push(series[0]);

series[0].comics?.push(comics[0]);
series[0].characters?.push(characters[0]);

// Black panter
characters[1].comics?.push(comics[1]);
characters[1].series?.push(series[1]);

comics[1].characters?.push(characters[1]);
comics[1].series?.push(series[1]);

series[1].comics?.push(comics[1]);
series[1].characters?.push(characters[1]);

// Abomintation
characters[2].comics?.push(comics[2]);
characters[2].series?.push(comics[2]);

comics[2].characters?.push(characters[2]);
comics[2].series?.push(series[2]);

series[2].comics?.push(comics[2]);
series[2].characters?.push(characters[2]);

// Iron-man
characters[3].comics?.push(comics[3]);
characters[3].series?.push(series[3]);

comics[3].characters?.push(characters[3]);
comics[3].series?.push(series[3]);

series[3].comics?.push(comics[3]);
series[3].characters?.push(characters[3]);

export { series };
export { characters };
export { comics };
