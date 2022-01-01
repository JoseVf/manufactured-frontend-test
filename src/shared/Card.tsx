import { Panel } from 'rsuite';

interface CardProps {
  children: React.ReactNode;
  panelClassName?: string;
}

const Card = ({ children, panelClassName }: CardProps) => {
  return (
    <Panel className={`shared__card-container center ${panelClassName}`} bordered shaded>
      <div className='center column'>
        {children}
      </div>
    </Panel>
  )
}

export default Card;
