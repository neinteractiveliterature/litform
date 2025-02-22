import { markdown } from '@codemirror/lang-markdown';
import { liquid } from '../';

it('parses an HTML document', () => {
  const languageSupport = liquid();
  const content = `{% assign proposal_chair = convention.staff_positions_by_name.game_proposals_chair %}
<p>
We're looking for a wide and varied slate of larps to fill this page. Do <em>you</em> have a game for us?  If so, please <a href="{% page_url new-proposal %}">propose your game</a>!
</p>

<p>
If you're not sure, then take a look at our <a href="{% page_url proposalfaq %}">Proposal FAQ</a>, or contact the {{proposal_chair.name_with_email_link}}</a>.
</p>`;

  const tree = languageSupport.language.parser.parse(content);
  tree.iterate({
    enter(node) {
      expect(node.type.isError).toBeFalsy();
    },
  });
});

it('parses a Markdown document', () => {
  const languageSupport = liquid({ baseLanguage: markdown().language });
  const content = `This is Markdown!  The value of **x** is {{ x }}.`;

  const tree = languageSupport.language.parser.parse(content);
  tree.iterate({
    enter(node) {
      expect(node.type.isError).toBeFalsy();
    },
  });
});
