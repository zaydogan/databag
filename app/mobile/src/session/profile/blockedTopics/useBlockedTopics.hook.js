import { useState, useEffect, useContext } from 'react';
import { CardContext } from 'context/CardContext';
import { ChannelContext } from 'context/ChannelContext';
import { ProfileContext } from 'context/ProfileContext';
import { getCardByGuid } from 'context/cardUtil';
import moment from 'moment';

export function useBlockedTopics() {

  const [state, setState] = useState({
    channels: []
  });

  const profile = useContext(ProfileContext);
  const card = useContext(CardContext);
  const channel = useContext(ChannelContext);

  const updateState = (value) => {
    setState((s) => ({ ...s, ...value }));
  }

  const getCard = (guid) => {
    let contact = null
    card.state.cards.forEach((card, cardId, map) => {
      if (card?.profile?.guid === guid) {
        contact = card;
      }
    });
    return contact;
  }

  const setChannelItem = (item) => {
    let timestamp;
    const date = new Date(item.channel.detail.created * 1000);
    const now = new Date();
    const offset = now.getTime() - date.getTime();
    if(offset < 86400000) {
      timestamp = moment(date).format('h:mma');
    }
    else if (offset < 31449600000) {
      timestamp = moment(date).format('M/DD');
    }
    else {
      timestamp = moment(date).format('M/DD/YYYY');
    }

    let subject;
    if (item?.detail?.data) {
      try {
        topic = JSON.parse(item?.detail?.data).subject;
        subject = topic;
      }
      catch (err) {
        console.log(err);
      }
    }
    if (!subject) {
      let contacts = [];
      if (item.cardId) {
        contacts.push(card.state.cards.get(item.cardId));
      }
      if (item.channel.detail?.members) {
        const profileGuid = profile.state.identity.guid;
        item.channel.detail.members.forEach(guid => {
          if (profileGuid !== guid) {
            const contact = getCardByGuid(card.state.cards, guid);
            contacts.push(contact);
          }
        })
      }

      if (contacts.length) {
        let names = [];
        for (let contact of contacts) {
          if (contact?.card?.profile?.name) {
            names.push(contact.card.profile.name);
          }
          else if (contact?.card?.profile?.handle) {
            names.push(contact.card.profile.handle);
          }
        }
        subject = names.join(', ');
      }
      else {
        subject = "Notes";
      }
    }

    return {
      id: `${item.cardId}:${item.channel.channelId}`,
      cardId: item.cardId,
      channelId: item.channel.channelId,
      name: subject,
      created: timestamp,
    }
  };

  useEffect(() => {
    let merged = [];
    card.state.cards.forEach((cardItem, cardId, map) => {
      cardItem.channels.forEach((channelItem) => {
        if (channelItem.blocked) {
          merged.push({ cardId, channel: channelItem });
        }
      });
    });
    channel.state.channels.forEach((channelItem, channelId, map) => {
      if (channelItem.blocked) {
        marged.push({ channel: channelItem });
      }
    });
    const items = merged.map(setChannelItem);
    updateState({ channels: items });
  }, [card.state, channel.state]);

  const actions = {
    unblock: async (cardId, channelId) => {
      if (cardId) {
        await card.actions.clearChannelFlag(cardId, channelId);
      }
      else {
        await channel.actions.clearChannelFlag(channelId);
      } 
    }
  };

  return { state, actions };
}

