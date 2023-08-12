import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const ItemPersonnalProject: FC<{item: TimelineItem}> = memo(({item}) => {
  const { content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      {content}
    </div>
  );
});

ItemPersonnalProject.displayName = 'ItemPersonnalProject';
export default ItemPersonnalProject;