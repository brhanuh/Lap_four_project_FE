import React from "react";
import "./styles.css";

const Contacts = () => {
  return (
    <>
      <h1>Phonelines</h1>

      <table id="helplines">
        <tr>
          <th>Helpline</th>
          <th>Contact</th>
        </tr>
        <tr>
          <td>
            <a href="https://www.samaritans.org/">Samaritans</a>
          </td>
          <td> 116 123</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.sane.org.uk/how-we-help/emotional-support/saneline-services">
              SANEline
            </a>
          </td>
          <td>0300 304 7000 </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.thecalmzone.net/">CALM</a>
          </td>
          <td> 0800 58 58 58</td>
        </tr>
        <tr>
          <td>
            <a href="https://giveusashout.org/">Shout</a>
          </td>
          <td>85258</td>
        </tr>
        <tr>
          <td>The Mix</td>
          <td>0808 808 4994</td>
        </tr>
      </table>
    </>
  );
};

export default Contacts;
