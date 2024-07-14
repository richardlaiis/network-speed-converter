const CardFooter = (props) => {
    const { inputValue } = props;
    let criteria = {};
    if (!inputValue) {
        criteria = {
            title: '===',
            backgroundColor: '#DBE2EF',
        };
    } else if (inputValue < 15) {
        criteria = {
            title: 'SLOW',
            backgroundColor: '#FFB4C2',
        };
    } else if ( inputValue < 40) {
        criteria = {
            title: 'MEDIUM',
            backgroundColor: '#667BC6',
        };
    } else {
        criteria = {
            title: 'FAST',
            backgroundColor: '#91DDCF',
        };
    }
    return (
        <div
            className="card-footer"
            style={{
                backgroundColor: criteria.backgroundColor,
            }}
        >
            {criteria.title}
        </div>
    );
}
export default CardFooter;