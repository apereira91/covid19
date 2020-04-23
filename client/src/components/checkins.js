import React from "react";
import Layout from "../components/Layout";
import Iframe from "react-iframe";

export const AppointmentsPageTemplate = () => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Check-in
              </h2>
              <p>
                If you have tested positive, please check-in with your current
                location so we can help prevent the spread of COVID-19. If you
                have not yet been tested, follow the link to relyMD.
              </p>
              <a
                className="button"
                href="https://relymd.com/coronavirus-2019/"
                style={{ marginTop: 20, marginBottom: 20 }}
              >
                Check-in
              </a>
              <Iframe
                url="https://calendar.google.com/calendar/embed?height=800&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=Z2FpdGtlZXBlcjEzQGdtYWlsLmNvbQ&amp;src=aTBpMjQ2M3EzY2xrM2RqMHRvczc3bjF0OTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;color=%23F6BF26&amp;color=%2333B679&amp;color=%230B8043"
                styles={{ borderWidth: 0 }}
                frameborder="0"
                height="800"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AppointmentsPage = () => {
  return (
    <Layout>
      <AppointmentsPageTemplate />
    </Layout>
  );
};

export default AppointmentsPage;
