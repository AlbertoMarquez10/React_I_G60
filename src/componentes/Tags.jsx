import Badge from 'react-bootstrap/Badge';
const Tags = ({color,raza})=>{

    return (
        <div>
            <Badge bg={color}>{raza}</Badge>
        </div>
        
    )
}
export default Tags