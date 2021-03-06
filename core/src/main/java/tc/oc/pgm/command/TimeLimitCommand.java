package tc.oc.pgm.command;

import app.ashcon.intake.Command;
import app.ashcon.intake.parametric.annotation.Text;
import java.time.Duration;
import javax.annotation.Nullable;
import tc.oc.pgm.api.Permissions;
import tc.oc.pgm.api.match.Match;
import tc.oc.pgm.api.party.VictoryCondition;
import tc.oc.pgm.result.TieVictoryCondition;
import tc.oc.pgm.result.VictoryConditions;
import tc.oc.pgm.timelimit.TimeLimit;
import tc.oc.pgm.timelimit.TimeLimitMatchModule;
import tc.oc.pgm.util.TimeUtils;
import tc.oc.pgm.util.chat.Audience;
import tc.oc.pgm.util.component.types.PersonalizedText;
import tc.oc.pgm.util.component.types.PersonalizedTranslatable;

public final class TimeLimitCommand {

  @Command(
      aliases = {"timelimit", "tl"},
      desc = "Start a time limit",
      help = "Result can be 'default', 'objectives', 'tie', or the name of a team",
      flags = "r",
      perms = Permissions.GAMEPLAY)
  public void timelimit(
      Audience audience, Match match, Duration duration, @Nullable @Text String text) {
    final TimeLimitMatchModule time = match.needModule(TimeLimitMatchModule.class);
    final TimeLimit existing = time.getTimeLimit();

    VictoryCondition result = null;
    if (text != null) {
      result = VictoryConditions.parse(match, text);
    } else if (existing != null) {
      result = existing.getResult();
    }

    if (result == null) {
      result = new TieVictoryCondition();
    }

    time.cancel();
    time.setTimeLimit(
        new TimeLimit(null, duration.isNegative() ? Duration.ZERO : duration, result, true));
    time.start();

    audience.sendMessage(
        new PersonalizedText(net.md_5.bungee.api.ChatColor.YELLOW)
            .extra(
                new PersonalizedTranslatable(
                    "match.timeLimit.commandOutput",
                    new PersonalizedText(
                        TimeUtils.formatDuration(duration), net.md_5.bungee.api.ChatColor.AQUA),
                    result.getDescription(match))));
  }
}
