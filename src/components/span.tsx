import React, {type ReactNode} from 'react';

type SpanProps = {
  children?: ReactNode;
};

function Span({children }: SpanProps) {
  return (
    <span className='span'>
     {children}
    </span>
  );
}

export default Span;