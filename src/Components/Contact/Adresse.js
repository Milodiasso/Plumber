import { Card, Row, Col } from "react-bootstrap"

const Adresse = () => {
    return (
        <Row className="info"  >
            <h3> Vous avez une question, un projet ? Vous souhaitez recevoir un devis ?  </h3>
            <Col className="phone">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAESUlEQVR4nO2aa4hNWxzAfxwjMwyKG/LKNcxw0fXIpISQ65GPpJSkpHwRda+uFC6FlKQ8Ip8o8n58uLpeedM0wySPvD6p8bjXvbfxCGfm+PDfu7XOmTF7r7PX3ufMsX+1O3vOrP/zrPdaEBMTExMT892SsKCjCzAQqABKgQbgowW9eU03YDVQBTQCqYznLrAe6JkrB8MiAawC/qdp0M0975BEtMuFs35oY1C2K3AQmK59dwc4A9wH3iLNYSgwC6jUyl0C5gJ/B3E2l5Qg1d39ZWuBqR4y4zNkahw9rZI9qECO4D+QDsB+TfZgKN6FzFAgiQRwGfP2nADOopIwxap3EbAJcbwRGJKljh9QHedNS35FRg3i+PWAetajasGAoE7Zoq3H/9sAg5z3qoC2Dmvv079ZKmK8EpAAOjnvbwPaugf867xXBNRlDa8ENCBVFuxMm+ucz7yZIXolIIVyuo8Fe+4IkrSgywpeCQB47Hz+HNBWAujtvNe1VDBK/CTghvM5AlkEZUsl0NF5rw2gJ3Imo4avxQH07HR0JIHuFvyKjCLgFeL8hSx1lAGfHR2nLPkVKdtQv94gj7KZlKAmUw1IU2p1DEENiXsN5DqSvg7YbN+16DiKBPEJ/0PiZlTw57Ezl8gZo1HB7PEps0iTeYF588k7TqDa8hifMmsooCT0A94jwVThbx4BsBKVhDqyX1bnBetQwSw1kCuYmlACPEECeQ+UG8gWTBLGobbJqpHJkl8KpjlsQAWyyVC2IGpCEWrbuxGYYyhvkoTewBJgO3AcOAnsBpZ5yIVOf+A1EkQ9MNxQ3isJlcA5mj9+05/bwLSsIrDAZOCL48gzoIehfGYSypDatYOmgf+DbK3VohZo+nOIHB2+rNCcqEZOiU3ITMIV7e8PwFZgZDNy5cBa4D+tfA05Wm7v0Jw4B7Q3lNeT4D43gb4+ZLsBf2pyFzEbmayQQC2YUs67qRN6Ek4jR2sm9g9o8n8Y2rZCB+T4zHXiGOZJWIg4X5yl/WrU0bxpf2SFzsgpkpuE45g3hyBM0Gyvi9BuGqXANc2RvzDvGIPgzk+qI7TZhFLgKum9c6+IbK9FTdA6R2SzWUqQzsxNwnNgWAR252k2TRZroZAAdqEcqkeuy4TJL5q9cSHb8s3vqI3VRmAL4V2emo9KQFlINrJiJnLKrM/hB4dgZyNqGz/v7iX9iDoncDdVlmJ2Y82L+47uqxZ1WqUYWdrqi53rwCgLumdpOn+1oC9UJiEjg+twElnnZztclgIPUSvHLhZ8DJ1OyNGbe3aYQu4a78TsLlERslHi6lhu183wKSd9zpBC9hnOAgtoeULzE+lL6JP43LK32fHYYiLwGzCDdP+SwAPkeu5L57tiZNdorFb2FrI7VB+Fs2FSgUyg3tDydpjef2zHcBWZjzUgkwQym5uNXNMpQ06o2iFD6CNkA2Yf8DRHPsbExMTExMS0Qr4CoMdcUHd3Ab4AAAAASUVORK5CYII=" style={{ width: '50px' }} />
                    <Card.Body>
                        <Card.Title>Téléphone</Card.Title>
                        <Card.Text>
                            +33 9 71 00 48 42
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>
            <Col className="mail">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACzklEQVR4nO2au24UMRSGP4UoTTYVu6tQ8QK8QwIvABEN1PACICFFSgOJIPA0iCwlEkJARwKCgpIilzbk0q6Swl5mNBl7PB7flvUnWSON59j/+e3xzM4aMplMJpNpYgBsAXvAOXCRaDmXGjelZifcB04SSK5tOQHWXCQ/lg2+BVaAxa6NemQRWAXeITSP6WDCkGLkn7lQF5h1hPa/QN+mgS2KkZ9WdhA5vLAJ/iGDV1wqCsxtRA57NsFnMrjnUlFglhA5nNoET1bTaUebx1xAIUmSDYgtIDa2BiwAb4Aj4r/xHQLbUpNTdIvH60DJtSmvLPLQogssj/xv4IZNBx0ZAD9LOo4U13kxYFL3q3Qc2nRiybDSt4nW1pg0Wh6FUDOh2ucyEQ2oE+TThLrkq3qqeDegTpgPE1TJ1+nBsE5L20Z9mqBLXqXHpE6LTaM+TGhKXqenqU6LbaMuTTBJvklPcAPAjQmmyTfpiWIAXH1Wt3lPaBtrrdXnj6Fyx7eAT5jNhAHwQcYAzAPXnKszoMsMqI6g6WjaxiV1C9RN3+q5uvt52SBOZUIyBugEl+v2gUfATVkeAwcGcSoTkjDARGgfsRZcKMpH6r/hN7Ud3YA2q/Yc8BAYAX9kGQEP0C/Kuj6iGtDmed0V1ftFNANCJj+hzoRoBszsB5HDUn2oka9S/SS2r7jOiwHbpfpUykuLPLToAhcQJpRnQqxygEhe9VnciwHThDaP/M9QbAGxyQbEFhCbbEBsAbFpa8BX4POUnbOm7vn5v5z7x8zfAvOaujPENrMeYhMywBeuupnyuSV5tNom9102tmoTnAh3EDnsqi7Q3QIjeXziUlFgnsrjSHuVggHFZul1V4oCsoHQfgxct21kjWK7/A5i723KW2d7iGn/HqF5DNzt2ug9xJbz2L/725ZjF8lP6CO2nO9SbKJOsZwC34DndJj2mUwmk5kVLgE75tU2aJu3BAAAAABJRU5ErkJggg==" style={{ width: '50px' }} />
                    <Card.Body>
                        <Card.Title>E-mail</Card.Title>
                        <Card.Text>
                            contact@plaster.lu
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col className="mail">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD5UlEQVRoge2ZS2wOURTHf22VxKNFPKqNWNFQIegGrbCwKtpSFh6brojY9REbEm0lEomQJrpo2SvxWKpHEImEpBYElXgn3g2toqQdi3sm8/nM697vfl+/hX9yM5M55/zPf2bua87Af2QXctLAWQrUAOuBEmCuXH8NvAF6gAtAXxpyW0E5cBVwYrYrwIoxURqAfKAdGEUJ/Ax0AptQb2eStFKgGugSH0diTgDjMq46CdOAayhRQ0ALUBAjrgBoBb7jvZ2padIYiXy8rvQG1bV0sRR4IRw3gPHW1GmgXQS8AopT4ClGTQQOcNyCLi2Uo/r3ELDMAt9yVDcbkfOMwe1SLRY524SzxyJnKErxZqewgb0BdcPfgEE5rwrxLwT6hXu+FaURaJZkXSE+rQSvH2Fv8bT4NFpRGoEeSVYdYN8g9p9AAzBHWqNccwh+M7Viv2xRbyCeSLIFAXZ3XWnwsTWJ7WpArNttH6eoMRYGJdnkCHuRj61IbAMBsZPFPqgrKlc3AMiT40iA3ZGj34Y0L8knKFZbl8mN9MtxVoD9rhx3+tjca/cCYmcm5UgrbhA+YKvwBnsTauUuRs12wxGxG8V+3aLeQByXZK0hPi2YTb+HxeeYFaUR2CLJHkb4VaFmp0HiLYgAj4S7NkWNsVCA10UWW+RdIpzDwBTdYJPBPoD6fgDYahAfhDo5XsZg+jXFNtTT68PsYSQjF3gqnDYfTiQmAO8k8SYLfNXC9Va4M4r9kvyWBa7bwtVsgUsbBcAXEbAyBZ7VwvGVMfxuPyoizqfAcUk4jlhRZIgS1CfqKLDKIL4CrwIzx6IuI7ifqHfQr1y6Y+OQbVEmmIKabRxgs0ZcncS8J14tLCPYg7euxJk+J4ivA+xOoy5tjAMeEL+buJvKB2SgXJoDPCO8EL02wb8CNeiHgbIQ3sXiMwqsS7i+Gq9+7NdeYvj3oDLiJvye6Cm8gZ/Hv8jFG+CdCdfzgPsx8lWa3EiHBLdpxEwHPkjcXh/7PrF9AmZo8LrfKR0aMYAqJrul/7Bu4ocdeCv13ITr81A7ZwfYrslZhlcU1Cp010hgr2ZCF2cl/iaq2+TilYkuGnL2El5P80U3wbWpOJiJWh8c4ABwUM4/ArMNORuE40zcgELgB6rcU2KYFLyq4W9pqX7CloimH6IxEvWEVwN14E4YDnDSAp/7F6DeunMEJqKKFA/lPFXEfsjary8GFkqzgdjdvhF1x92WEqcDsSYid3WtyYQiQ0QuDYvEoZ8xKABoYDxqZ/BXXS2xlLNLjt2oTV224hdwTs7/2SHkAM+J3rRlW3tJUl1tTRaIMm1rkt/Kf2QD/gC0JJT4xs8O3wAAAABJRU5ErkJggg==" style={{ width: '50px' }} />
                    <Card.Body>
                        <Card.Title>Adresse</Card.Title>
                        <Card.Text>
                            7 rue des Roches
                            <br />
                            57000 Metz
                            <br />
                            France
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>

        </Row>
    )
}

export default Adresse

