import Excel from './Excel';
import Logo from './Logo';
import Body from './Body';
import Button from './Button';
import Suggest from './Suggest';
import Rating from './Rating';
import FormInput from './FormInput';

function Discovery() {
    return (
        <div className="Discovery">
            <h2>Logo</h2>
            <div sytle={{backgroun: '#f6f6f6', display: 'inline-block'}}>
                <Logo />
            </div>

            <h2>Button</h2>
            <p>
                Button with onClick:{' '}
                <Button onClick={() => alert('ouch')}>Click me</Button>
            </p>
            <p>
                A link: <Button href="https://react.org">Follow Me</Button>
            </p>
            <p>
                Custom class name: {' '}
                <Button className="Discover-custom-button">I do nothing</Button>
            </p>

            <h2>Suggest</h2>
            <p>
                <Suggest options={['eenie','meenie','miney','mo']} />
            </p>

            <h2>Rating</h2>
            <p>
                No initial value: <Rating />
            </p>
            <p>
                Initial value 4: <Rating defaultValue={4} />
            </p>
            <p>
                This one goes to 11: <Rating max={11} />
            </p>
            <p>
                Read-only: <Rating readonly={true} defaultValue={3} />
            </p>

            <h2>FormInput</h2>
            <table className="Discover-pad">
                <tbody>
                    <tr>
                        <td>Vanilla input</td>
                        <td><FormInput /></td>
                    </tr>
                    <tr>
                        <td>Prefilled</td>
                        <td><FormInput defaultValue="With a default" /></td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td><FormInput type="year" /></td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td><FormInput type="rating" defaultValue={4} /></td>
                    </tr>
                    <tr>
                        <td>Suggest</td>
                        <td><FormInput type="suggest" options={['red','green','blue']} defaultValue="green" /></td>
                    </tr>
                    <tr>
                        <td>Vanilla textarea</td>
                        <td><FormInput type="textarea" /></td>
                    </tr>
                </tbody>
            </table>

            <h2>Body</h2>
            <Body>Content inside of the Body tag</Body>

            <h2>Excel</h2>
            <Excel headers={['Name','Year']}
                   initialData={[
                       ['Charles','1859'],
                       ['Antoine','1943'],
                   ]}
            />
        </div>
    );
}

export default Discovery;