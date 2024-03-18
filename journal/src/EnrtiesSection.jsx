import { Fragment } from "react";
import Badge from "../Badge";
import Main from "./main";

export default function EntriesSection() {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry date={entry.date} motto={entry.motto} notes={entry.notes} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
